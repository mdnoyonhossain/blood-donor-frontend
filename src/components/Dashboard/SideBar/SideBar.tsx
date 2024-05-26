import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SidebarItem";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";

const SideBar = () => {
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const { role } = getUserInfo() as any;
        setUserRole(role);
    }, []);

    return (
        <Box>
            <Stack direction="row"  gap={1} sx={{ py: 1, mt: 1 }} component={Link} href="/">
                <Image src={assets.images.bloodLogo} width={200} height={50} alt="logo" />
            </Stack>
            <List>
                {drawerItems(userRole as UserRole).map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </List>
        </Box>
    );
};

export default SideBar;