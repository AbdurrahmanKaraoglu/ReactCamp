import React from 'react'
import { Menu,Dropdown,Image } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://react.semantic-ui.com/logo.png"></Image>
                <Dropdown pointing >
                    <Dropdown.Menu>
                        <Dropdown.Item text = "Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={props.signOut} text = "Çıkış Yap" icon="sign-out" />
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
