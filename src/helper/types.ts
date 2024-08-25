// Routes Interface Starts ------------------------

/**
 * Interface for sidebar menu items.
 */
export interface SidebarMenuObj {
    path: string;
    icon: JSX.Element; // Change this to typeof Squares2X2Icon | typeof InboxArrowDownIcon | ...
    pageName: string;
    pageTitle: string;
    submenu?: SubmenuItem[];
}

/**
 * Interface for submenu items.
 */
export interface SubmenuItem {
    path: string;
    icon: any; // Change this to typeof Squares2X2Icon | typeof InboxArrowDownIcon | ...
    pageName: string;
    pageTitle: string;
}


// Routes Interface End ------------------------

/**
 * Interface for api response
 */
export interface APIResponse {
    payload: any;
    message: string; 
}

/**
 * Interface for UserProfile data.
 */
export interface UserProfile {
    name: string;
    avatar: string;
    emailId: string;
    isLoggedIn: boolean;
}



/**
 * Interface for lead data.
 */
export interface Lead {
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    id?: number;
}
