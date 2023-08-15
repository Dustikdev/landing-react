import React from 'react'
import './NavigationLink.scss'

interface NavigationLinkProps {
    url: string;
    className: string;
    name: string;
}

export const NavigationLink = (props: NavigationLinkProps) => {
  return (
    <a href={props.url} className={props.className}>{props.name}</a>
  )
}
