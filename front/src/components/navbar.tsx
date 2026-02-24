'use client'

import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const navLinks = [
  { label: 'Markets', href: '#' },
  { label: 'Business', href: '#' },
  { label: 'Technology', href: '#' },
  { label: 'Opinion', href: '#' },
  { label: 'Life & Culture', href: '#' },
]

const profileMenuItems = [
  { label: 'Your Profile', href: '#' },
  { label: 'Settings', href: '#' },
  { label: 'Sign Out', href: '#' },
]

function ProfileDropdown() {
  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center text-gray-600 hover:text-gray-900 transition-colors focus:outline-none">
        <UserCircleIcon className="size-6 sm:size-7" />
        <span className="sr-only">Open user menu</span>
      </MenuButton>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded bg-white shadow-lg ring-1 ring-black/5 py-1 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        {profileMenuItems.map(({ label, href }) => (
          <MenuItem key={label}>
            <a
              href={href}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-50"
            >
              {label}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}

function Masthead() {
  return (
    <Link href={'/'}>
      <div className="text-center">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
          Stratum
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">All the bullshit you never understood</p>
      </div>
    </Link>
  )
}

function DesktopSubNav() {
  return (
    <div className="hidden lg:block">
      <nav className="flex items-center justify-center gap-8 px-6 py-2.5">
        {navLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="text-xs font-medium tracking-widest uppercase text-gray-600 hover:text-gray-900 transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

function MobileMenuButton() {
  return (
    <DisclosureButton className="absolute left-4 text-gray-600 hover:text-gray-900 transition-colors lg:hidden">
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="size-6 group-data-open:hidden" />
      <XMarkIcon className="hidden size-6 group-data-open:block" />
    </DisclosureButton>
  )
}

function MobileMenu() {
  return (
    <DisclosurePanel className="lg:hidden border-t border-gray-200">
      <nav className="flex flex-col px-4 py-3 gap-1">
        {navLinks.map(({ label, href }) => (
          <DisclosureButton key={label} className="block w-full text-left">
            <Link
              href={href}
              className="block px-3 py-2 text-sm font-medium tracking-wide uppercase text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
            >
              {label}
            </Link>
          </DisclosureButton>
        ))}
        <DisclosureButton className="block w-full text-left">
          <Link
            href="/most-viewed"
            className="block px-3 py-2 text-sm font-medium tracking-wide uppercase text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
          >
            Most Viewed
          </Link>
        </DisclosureButton>
        <DisclosureButton className="block w-full text-left">
          <Link
            href="/top-picks"
            className="block px-3 py-2 text-sm font-medium tracking-wide uppercase text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors"
          >
            Top Picks
          </Link>
        </DisclosureButton>
      </nav>
    </DisclosurePanel>
  )
}

export default function NavBar() {
  return (
    <Disclosure as="header" className="group bg-white border-b border-gray-300">
      <div className="relative flex items-center justify-center px-4 py-3 sm:px-6 sm:py-5">
        <MobileMenuButton />
        <Masthead />
        <div className="absolute right-4 sm:right-6">
          <ProfileDropdown />
        </div>
      </div>
      <DesktopSubNav />
      <MobileMenu />
    </Disclosure>
  )
}
