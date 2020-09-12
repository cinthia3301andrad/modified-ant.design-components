import React from 'react'
import { Menu } from 'antd'
import { MdFlight, MdCameraAlt, MdCardTravel } from 'react-icons/md'
import { FaBed, FaHotel } from 'react-icons/fa'

const styleItem: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "auto",
    color: "gray"
}

export default () =>
    <>
        <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" title="Viagens" icon={<MdCardTravel size="20px"
                style={{ marginRight: 5, color: "#52DF9A" }} />}>
                Viagens
            </Menu.Item>
            <Menu.Item key="2" icon={<MdCameraAlt size="20px"
                style={{ marginRight: 5, color: "#52DF9A" }} />}>
                O que fazer
            </Menu.Item>
            <Menu.Item key="3" icon={<MdFlight size="20px"
                style={{ marginRight: 5, color: "#52DF9A" }} />}>
                Voos
            </Menu.Item>
            <Menu.Item key="4" icon={<FaBed size="20px"
                style={{ marginRight: 5, color: "#52DF9A" }} />}>
                Hotéis
            </Menu.Item>
            <Menu.Item key="5" icon={<FaHotel size="20px"
                style={{ marginRight: 5, color: "#52DF9A" }} />}>
                Aluguéis de temporada
            </Menu.Item>
        </Menu>
    </>