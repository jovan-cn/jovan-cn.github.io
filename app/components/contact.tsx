'use client'
import classNames from "classnames";
import { RiGithubLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { ReactNode } from "react";


interface ContactLinkProps {
  href: string,
  children: ReactNode | string,
  className?: string,
}
const ContactLink: React.FC<ContactLinkProps> = (props) => {
  const {href, children, className} = props;
  return (
    <a href={href} className={
      classNames(className, "cursor-pointer hover:text-slate-500")
    } target="_blank" >
      {children}
    </a>
  )
}


export default function Contact() {
  return (
    <div className={classNames("flex gap-2")}>
      <ContactLink href="https://github.com/jovan-cn/jovan-cn.github.io" >
        <RiGithubLine />
      </ContactLink>
      <ContactLink href="mailto:jovan.cn@outlook.com" >
        <HiOutlineMail />
      </ContactLink>
    </div>
  )
}