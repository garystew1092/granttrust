import React, { useState, useEffect, useContext } from "react";
import Guy from "../../assets/girl.png";
import DefaultDP from "../../assets/default DP.jpg";
import { HiMiniBellAlert } from "react-icons/hi2";
import { IoHomeSharp } from "react-icons/io5";
import MessageBox from "../../Components/MessageBox";
import UserSetting from "../../Components/UserSetting";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { TbTransactionDollar } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import Support from "../../Components/Support";
import "../../CSS/Dashboard.css"; // Create this CSS file for transitions
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPlus } from "react-icons/fa";
import Add from "../../Components/Add";
import OverView from "../../Components/OverView";
import { useUserAuth } from "../../Hooks/useUserAuth";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Utils/axiosInstance";
import { API_PATHS } from "../../Utils/apiPaths";
import { DashboardContext } from "../../Context/DashboardContext";
import { useUser } from "../../Context/userContext"; // Adjust path as needed
export default function Dashboard() {
  useUserAuth();
  const { clearUser } = useUser();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [dropdownAnimation, setDropdownAnimation] = useState("");


  const { updateUser, user } = useContext(UserContext);
  const navigate = useNavigate();
  // Add loading state for user data
  const [userLoading, setUserLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setUserLoading(false);
    }
  }, [user]);

const showProfile = (e) => {
  e.stopPropagation(); // Prevent event bubbling
  setDropdownAnimation('dropdown-enter');
  setShowProfileDropdown(!showProfileDropdown);
};

// Close dropdown when clicking outside
useEffect(() => {
  const handleClickOutside = () => {
    if (showProfileDropdown) {
      setDropdownAnimation('dropdown-exit');
      setTimeout(() => setShowProfileDropdown(false), 200);
    }
  };

  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, [showProfileDropdown]);

 const handleProfilePictureChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // Validate file type and size
  if (!file.type.match('image.*')) {
    toast.error('Please select an image file');
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    toast.error('Image size should be less than 5MB');
    return;
  }

  try {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('profilePicture', file);
    
    const response = await axiosInstance.post(
      API_PATHS.USER.UPDATE_PROFILE_PICTURE,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      }
    );

    // Update user context with the new image
    updateUser({
      ...user,
      profileImage: response.data.profileimageurl
    });

    toast.success('Profile picture updated successfully!');
  } catch (error) {
    console.error('Upload error:', error);
    toast.error(error.response?.data?.message || 'Failed to update profile picture');
  } finally {
    setIsLoading(false);
    e.target.value = '';
  }
};

  const onLogOut = async (e) => {
    e?.preventDefault(); // Optional: Only if called from a form submit

    try {
      await axiosInstance.get(API_PATHS.AUTH.LOG_OUT);

      // Clear user from context and local storage
      clearUser();

      // Show success toast
      toast.success("Logged out successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Redirect to auth page
      navigate("/auth");
    } catch (err) {
      console.error("Logout error:", err);

      // Still clear user even if logout API fails
      clearUser();

      // Show error toast
      toast.error(
        err.response?.data?.message || "Logout failed. Please try again.",
        {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );

      // Redirect to auth page anyway
      navigate("/auth");
    }
  };

  const [activeComponent, setActiveComponent] = useState("Overview");
  const [isLoading, setIsLoading] = useState(false);

  const components = {
    Overview: <OverView />,
    additem: <Add />,
    Assets: <div className="overview-content">Welcome to your Dashboard</div>,
    Transactions: (
      <div className="transactions-content">Transactions Component</div>
    ),
    Messages: <MessageBox />,
    Settings: <UserSetting />,
    Support: <Support />,
  };

  const handleLinkClick = (componentName) => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setActiveComponent(componentName);
      setIsLoading(false);
    }, 500);
  };

 

  // Update active link styling
  useEffect(() => {
    const links = document.querySelectorAll(".nav-links li");
    links.forEach((link) => {
      link.classList.remove("active");
      if (link.querySelector("span").textContent === activeComponent) {
        link.classList.add("active");
      }
    });
  }, [activeComponent]);

  if (userLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  // Add null check before accessing user properties
  if (!user) {
    return null; // or redirect to login
  }

 const displayProfileImage = user?.profileImage 
    ? user.profileImage.startsWith('http') 
      ? user.profileImage 
      : `${API_PATHS.BASE_URL}${user.profileImage}`
    : DefaultDP;



  return (
    <DashboardContext.Provider value={{ setActiveComponent }}>
      <div className="dashboard-container">
        <nav className="sidebar">
          <div className="sidebar-header">
            <h2>Dashboard</h2>
          </div>

          <ul className="nav-links">
            <li className={activeComponent === "Overview" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("Overview");
                }}
                className="flex gap-2"
              >
                <IoHomeSharp />
                <span>Overview</span>
              </a>
            </li>
            <li className={activeComponent === "additem" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("additem");
                }}
                className="flex gap-2"
              >
                <FaPlus />
                <span>Add item</span>
              </a>
            </li>
            <li className={activeComponent === "Assets" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("Assets");
                }}
                className="flex gap-2"
              >
                <MdOutlineVideogameAsset />
                <span>Assets</span>
              </a>
            </li>
            <li className={activeComponent === "Transactions" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("Transactions");
                }}
                className="flex gap-2"
              >
                <TbTransactionDollar />
                <span>Transactions</span>
              </a>
            </li>
            <li className={activeComponent === "Messages" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("Messages");
                }}
                className="flex gap-2"
              >
                <FaMessage />
                <span>Messages</span>
                <span className="badge">1</span>
              </a>
            </li>
            <li className={activeComponent === "Settings" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("Settings");
                }}
                className="flex gap-2"
              >
                <IoSettings />
                <span>Settings</span>
              </a>
            </li>
            <li className={activeComponent === "Support" ? "active" : ""}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick("Support");
                }}
                className="flex gap-2"
              >
                <MdContactSupport />
                <span>Support</span>
              </a>
            </li>
          </ul>

          <div className="sidebar-footer">
            <div className="user-profile">
              <img src={displayProfileImage} alt="User Avatar" />
              <div className="user-info">
                <span className="user-name">{user.firstname}</span>
                <span className="user-role">
                  {user.role === "member" ? "client" : "Administrator"}
                </span>
              </div>
            </div>
            <button onClick={onLogOut} className="logout-btn">
              <i className="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </div>
        </nav>

        <main className="main-content">
   <header className="top-bar">
  <div className="search-bar"></div>
  <div className="user-actions">
    <button className="notification-btn flex items-center gap-1">
      <HiMiniBellAlert />
      <span className="badge">1</span>
    </button>
    <button 
      className="user-menu-btn" 
      onClick={showProfile}
    >
      <img src={displayProfileImage} alt="User Avatar"/>
      <span>{user.firstname + " " + user.lastname}</span>
      <i className="fas fa-chevron-down"></i>
    </button>

    {/* Profile Dropdown */}
    {showProfileDropdown && (
      <div className={`profile-dropdown ${dropdownAnimation}`}>
        <div 
          className="dropdown-item"
          onClick={() => {
            // Add your change profile picture logic here
            document.getElementById('profile-picture-input').click();
          }}
        >
          <MdOutlinePhotoCamera />
          <span>Change Profile Picture</span>
        </div>
        <div 
          className="dropdown-item"
          onClick={onLogOut}
        >
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>
    )}

    {/* Hidden file input for profile picture */}
    <input 
      type="file" 
      id="profile-picture-input" 
      accept="image/*" 
      style={{ display: 'none' }}
      onChange={handleProfilePictureChange}
    />
  </div>
</header>

          <div className="content-area">
            {isLoading ? (
              <div className="loader-container">
                <div className="loader"></div>
              </div>
            ) : (
              <div className="component-container fade-in">
                {components[activeComponent]}
              </div>
            )}
          </div>
        </main>
      </div>
    </DashboardContext.Provider>
  );
}
