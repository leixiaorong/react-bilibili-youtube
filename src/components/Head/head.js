import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Modal, Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, LogoutOutlined } from '@ant-design/icons';
import './head.css'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css';

const { confirm } = Modal;

const onClick = ({ key }) => {
    // message.info(`Click on item ${key}`);
    showConfirm();
};

const menu = (
    <Menu onClick={onClick}>
        <Menu.Item key="logOut"><LogoutOutlined />注销</Menu.Item>
    </Menu>
);

function showConfirm() {
    confirm({
        title: '确定要注销账号吗？',
        icon: <ExclamationCircleOutlined />,
        content: '注销将退出到登陆界面',
        okText: '注销',
        cancelText: '取消',
        onOk() {
            console.log('OK');
            location.href = "/#/tap_login"
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}
export default class Head extends Component {

    render() {
        return (
            <div className="head">
                <Dropdown className="headDropdown" overlay={menu}>
                    <div className="avt" ></div>
                </Dropdown>
                <Dropdown className="headDropdown" overlay={menu}>
                    <div className="label-admin">
                        管理员
                    </div>
                </Dropdown>
            </div>
        );
    }
}
