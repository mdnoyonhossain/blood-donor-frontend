import { USER_ROLE } from "@/constants/role";
import { DrawerItem, UserRole } from "@/types";

//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReviewsIcon from "@mui/icons-material/Reviews";
import TryIcon from "@mui/icons-material/Try";
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
                    title: "Schedules",
                    path: `${role}/schedules`,
                    icon: CalendarMonthIcon,
                }
            );
            break;

        default:
            break;
    }

    return [...roleMenus, ...defaultMenus];
}