import { createContext, useContext, useEffect, useState, useCallback } from "react";
import axiosInstance from "../Utils/axiosInstance";
import { API_PATHS } from "../Utils/apiPaths";

export const UserContext = createContext();

// Custom hook for consuming context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

const fetchUserDetails = useCallback(async (token) => {
    try {
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.OVER_VIEW, {
        headers: { Authorization: `Bearer ${token}` }
      });
      updateUser({
        itemCount: response.data.count
      });
    } catch (err) {
      console.error("Failed to fetch overview details", err);
    }
  }, []);

const fetchUserProfile = useCallback(async (token) => {
  try {
    const response = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    // Also fetch dashboard data
    const dashboardResponse = await axiosInstance.get(API_PATHS.DASHBOARD.OVER_VIEW, {
      headers: { Authorization: `Bearer ${token}` }
    });
    
    setUser({
      ...response.data,
      itemCount: dashboardResponse.data.count
    });
    
  } catch (err) {
    console.error("Failed to fetch user profile", err);
    throw err; // Re-throw to be caught in handleLogin
  }
}, []);
useEffect(() => {
  const initializeAuth = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      
      // Fetch profile and dashboard data in parallel
      const [profileRes, dashboardRes] = await Promise.all([
        axiosInstance.get(API_PATHS.AUTH.GET_PROFILE, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axiosInstance.get(API_PATHS.DASHBOARD.OVER_VIEW, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      setUser({
        ...profileRes.data,
        itemCount: dashboardRes.data.count
      });

    } catch (err) {
      console.error("Auth initialization failed:", err);
      if (err.response?.status === 401) {
        clearUser(); // Clear invalid token
      }
    } finally {
      setLoading(false);
    }
  };

  initializeAuth();
}, []);
const updateUser = useCallback((userData) => {
  setUser(prev => {
    const updatedUser = {
      ...prev,
      ...userData,
      // Ensure all properties are preserved
      profileImage: userData.profileImage || prev?.profileImage,
      // Preserve itemCount if not in update
      itemCount: userData.itemCount !== undefined ? userData.itemCount : prev?.itemCount
    };
    return updatedUser;
  });
  
  if (userData?.token) {
    localStorage.setItem("token", userData.token);
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
  }
  setLoading(false);
}, []);

  const clearUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
    delete axiosInstance.defaults.headers.common['Authorization'];
    setLoading(false);
  }, []);

  const refreshUser = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      await fetchUserProfile(token);
    }
  }, [fetchUserProfile]);

  const value = {
    user,
    loading,
    error,
    updateUser,
    clearUser,
    refreshUser
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;