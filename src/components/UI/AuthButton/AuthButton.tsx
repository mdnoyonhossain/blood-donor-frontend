import { authKey } from "@/constants/authKey";
import { deleteCookies } from "@/services/actions/deleteCookies";
import { logoutUser } from "@/services/actions/logoutUser";
import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
    const userInfo = getUserInfo();
    const router = useRouter();

    const handleLogOut = () => {
        logoutUser(router);
        router.refresh();
    }

    return (
        <>
            {userInfo?.id ?
                <Button
                    color="error"
                    variant="contained"
                    size="small"
                    component={Link}
                    href="/dashboard"
                >
                    Dashboard
                </Button>
                :
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component={Link}
                    href="/login"
                >
                    Login
                </Button>
            }
        </>
    );
};

export default AuthButton;