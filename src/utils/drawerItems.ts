import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';

export const drawerItems = (role: UserRole): DrawerItem[] => {
    const roleMenus: DrawerItem[] = [];

    const defaultMenus = [
        {
            title: "My Profile",
            path: `${role}/profile`,
            icon: PersonIcon,
        },
        {
            title: "Password",
            path: `/change-password`,
            icon: KeyIcon,
        }
    ]

    switch (role) {
        case USER_ROLE.ADMIN:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Manage User",
                    path: `${role}/manage-uesr`,
                    icon: CalendarMonthIcon,
                },
            );
            break;

        case USER_ROLE.USER:
            roleMenus.push(
                {
                    title: "Dashboard",
                    path: `${role}`,
                    icon: DashboardIcon,
                },
                {
                    title: "Blood Request",
                    path: `${role}/blood-request-list`,
                    icon: CalendarMonthIcon,
                },
                {
                    title: "Blood Requests Received",
                    path: `${role}/blood-request-received`,
                    icon: CalendarMonthIcon,
                },
            );
            break;

        default:
            break;
    }

    return [...roleMenus, ...defaultMenus];
}