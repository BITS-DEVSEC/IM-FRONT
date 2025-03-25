"use client"

import React from "react"
import Buna from "/buna_norm.svg";
import BunaWhite from "/buna_white.svg";

import { useState, useEffect, type SetStateAction } from "react"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  ChevronRight,
  Package,
  Users,
  Layers,
  Rocket,
  Shield,
  FileText,
  Phone,
  Clock,
  Moon,
  Sun,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils" 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Enhanced menu items with icons and hot/new indicators
const menuItems = [
  { name: "Home", href: "#home", id: "home", icon: Layers },
  { name: "About", href: "#about", id: "about", icon: Users },
  {
    name: "Products",
    href: "#services",
    id: "services",
    icon: Package,
    dropdown: [
      {
        title: "Motor Insurance",
        description: "Comprehensive, Third Party & Own Damage",
        href: "/motor-insurance",
        icon: Shield,
      },
      {
        title: "Liability Insurance",
        description: "Secure Your Liability now with us",
        href: "/motor-insurance",
        icon: Rocket,
      },
      {
        title: "Health Insurance",
        description: "Protect yourself from liabilities",
        href: "#liability-insurance",
        icon: FileText,
      },
    ],
  },
  { name: "Contact", href: "#contact", id: "contact", icon: Phone },
];

// Enhanced ListItem with improved hover effects and animations
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    icon?: React.ComponentType<{ className?: string }>
    badge?: string
    hot?: boolean
  }
>(({ className, title, children, icon: Icon, badge, hot, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "group relative block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {Icon && (
              <div className="relative">
                <Icon className="h-4 w-4 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
                {hot && (
                  <motion.span
                    className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>
            )}
            <span className="relative">
              {title}
              <motion.span
                className="absolute -bottom-1 left-0 h-[1px] bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </span>
            {badge && (
              <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                {badge}
              </Badge>
            )}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-accent-foreground/80">
            {children}
          </p>
          <motion.div
            className="absolute bottom-1 left-0 h-[2px] bg-primary"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export function HeroHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeLink, setActiveLink] = useState("home") 

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link)
    setIsOpen(false)
  }

  const ThemeToggle = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem  >Light</DropdownMenuItem>
          <DropdownMenuItem >Dark</DropdownMenuItem>
          <DropdownMenuItem  >System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-full flex justify-center z-50 px-4 pt-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav
        className={cn(
          "transition-all duration-500 w-full max-w-2xl",
          "rounded-full flex items-center justify-between",
          "backdrop-blur-lg border border-white/10", // Increased blur effect
          scrolled
            ? "bg-gradient-to-r from-background/90 via-background/95 to-background/90 py-1.5 px-3 scale-[0.92] shadow-lg"
            : "bg-gradient-to-r from-background/70 via-background/80 to-background/70 py-2.5 px-5 shadow-xl",
          isHovered && !scrolled && "scale-[1.03] shadow-2xl"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a
            href="/"
            className={cn(
              "flex items-center space-x-2 transition-all duration-300",
              scrolled ? "scale-95" : ""
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center rounded-full transition-all duration-300",
                "bg-gradient-to-br from-primary to-primary/80",
                scrolled ? "h-7 w-7" : "h-8 w-8"
              )}
            >
              <img alt="Your Company" src={Buna} className=" dark:hidden" />
              <img
                alt="Your Company"
                src={BunaWhite}
                className="hidden dark:block"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((link) =>
              link.dropdown ? (
                <NavigationMenu key={link.id}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger
                        className={cn(
                          "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                          "hover:bg-primary/10",
                          activeLink === link.id
                            ? "text-foreground"
                            : "text-foreground/70 hover:text-foreground"
                        )}
                      >
                        {link.name}
                        {activeLink === link.id && (
                          <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                        )}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 p-4 md:grid-cols-2 bg-card dark:bg-card rounded-xl shadow-lg dark:shadow-primary/5">
                          {link.dropdown.map((subItem, subIndex) => (
                            <ListItem
                              key={subIndex}
                              title={subItem.title}
                              href={subItem.href}
                              icon={subItem.icon}
                              hot={subItem.hot}
                            >
                              {subItem.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => handleLinkClick(link.id)}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    "hover:bg-primary/10",
                    activeLink === link.id
                      ? "text-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  )}
                >
                  {link.name}
                  {activeLink === link.id && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </a>
              )
            )}
          </div>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-1">

            {/* Login and Get Started buttons on desktop */}
            <div className="hidden md:flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  <a href="/login">
                    <span>Login</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden rounded-full"
              >
                <Button
                  asChild
                  size="sm"
                  className="relative z-10 rounded-full"
                >
                  <a href="/choose">
                    <span className="flex items-center gap-1">
                      Get Started
                      <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden rounded-full transition-all duration-300",
                "hover:bg-primary/10 hover:scale-110",
                scrolled ? "h-8 w-8" : "h-9 w-9"
              )}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X
                  className={cn(
                    "transition-all",
                    scrolled ? "h-4 w-4" : "h-5 w-5"
                  )}
                />
              ) : (
                <Menu
                  className={cn(
                    "transition-all",
                    scrolled ? "h-4 w-4" : "h-5 w-5"
                  )}
                />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Floating Island Style */}
      {isMobile && (
        <div
          className={cn(
            "absolute top-20 left-1/2 -translate-x-1/2 w-[85%] max-w-md",
            "rounded-2xl bg-gradient-to-b from-background/95 to-background/90 backdrop-blur-lg",
            "transition-all duration-300 ease-out z-40",
            "border border-white/10",
            isOpen
              ? "opacity-100 translate-y-0 shadow-xl"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
          style={{
            boxShadow: isOpen
              ? `0 10px 25px -5px ${
                  theme === "dark"
                    ? "rgba(124, 58, 237, 0.2)"
                    : "rgba(0, 0, 0, 0.15)"
                }`
              : "none",
          }}
        >
          <div className="flex flex-col p-2">
            {/* Notch design element */}
            <div className="w-full flex justify-center mb-2">
              <div className="w-10 h-1 bg-muted-foreground/20 rounded-full" />
            </div>

            {menuItems.map((link, index) =>
              link.dropdown ? (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  key={link.id}
                >
                  <AccordionItem value={link.id} className="border-none">
                    <AccordionTrigger
                      className={cn(
                        "px-4 py-3 rounded-xl transition-all duration-300",
                        "hover:bg-primary/10 no-underline",
                        activeLink === link.id
                          ? "bg-primary/5 text-foreground font-medium"
                          : "text-foreground/70"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span>{link.name}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid gap-2 pl-6 pr-2 pb-2">
                        {link.dropdown.map((subItem, subIndex) => (
                          <motion.li
                            key={subIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.1 + subIndex * 0.05,
                            }}
                          >
                            <a
                              href={subItem.href}
                              className="group flex items-center gap-2 rounded-md p-2 hover:bg-muted"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="relative">
                                {subItem.icon && (
                                  <subItem.icon className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                                )}
                                {subItem.hot && (
                                  <motion.span
                                    className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500 ring-2 ring-background"
                                    initial={{ scale: 0.8 }}
                                    animate={{
                                      scale: [0.8, 1.2, 0.8],
                                    }}
                                    transition={{
                                      repeat: Number.POSITIVE_INFINITY,
                                      duration: 2,
                                      ease: "easeInOut",
                                    }}
                                  />
                                )}
                              </div>
                              <span className="text-sm font-medium group-hover:text-primary">
                                {subItem.title}
                              </span>
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <a
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-2",
                    "hover:bg-primary/10",
                    activeLink === link.id
                      ? "bg-primary/5 text-foreground font-medium"
                      : "text-foreground/70"
                  )}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  {link.name}
                </a>
              )
            )}

            {/* Login and Get Started buttons in mobile menu */}
            <div className="mt-4 space-y-2 px-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden rounded-full"
              >
                <Button asChild className="w-full relative z-10 rounded-full">
                  <a href="/choose">
                    <span className="flex items-center justify-center gap-1">
                      Get Started
                      <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </Button>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/0 to-primary/20"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full"
                >
                  <a href="/login">
                    <span>Login</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-background/10 backdrop-blur-sm z-30 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsOpen(false)}
        />
      )}
    </motion.div>
  );
}

export default HeroHeader;