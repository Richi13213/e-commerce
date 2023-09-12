import React, {ReactNode} from 'react'

import Sidebar from '../sharing/Sidebar/organisms/Sidebar';

import {LayoutProps} from "../logic/typing/props"

import { Main } from "../styles/layout"

export default function Layout({children}: LayoutProps) {
  return (
    <>
			<Main>
				<Sidebar />
				{children}
			</Main>
    </>
  );
}
