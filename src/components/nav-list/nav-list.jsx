import React from "react";


const NavList = (props) =>{

	const {
		title,

	} = props

    return(
    <>
			<li class="hover:border-b transition duration-10000">
				<a style={{cursor:'pointer'}}>{title}</a>
			</li>
		</>
    )
    
}
export default NavList;