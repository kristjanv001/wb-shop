import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { useAppSelector } from "../app/hooks"
import { selectAuth } from "../features/auth/authSlice"
import { MenuOutlined } from '@ant-design/icons';

export const SideDrawer = ({ onSignIn, onSignOut }: { onSignIn: () => void, onSignOut: () => void }) => {
    const authStatus = useAppSelector(selectAuth)
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <>
            <Button type="text" onClick={showDrawer}>
                <MenuOutlined />
            </Button>
            <Drawer
                title="Menu"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >

                {authStatus?.user?.email
                    ? <Button onClick={onSignOut} type="link">Log out</Button>
                    : <Button onClick={onSignIn} type="link">Sign In</Button>}
            </Drawer>
        </>
    );
}