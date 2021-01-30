import { signOut } from "next-auth/client";

export default function Logout() {
  return (
    <div
      className="flex items-center mb-12 justify-center w-12 h-12 transition ease-in-out transform rounded-lg cursor-pointer hover:shadow-md bg-buttonColor duration-250 hover:-translate-y-0.5 hover:scale-105"
      onClick={() => signOut()}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 19H2C2 15.6863 4.68629 13 8 13C11.3137 13 14 15.6863 14 19H12C12 16.7909 10.2091 15 8 15C5.79086 15 4 16.7909 4 19ZM20.294 15.706L18 13.413L15.707 15.706L14.293 14.292L16.585 12L14.293 9.707L15.707 8.293L18 10.586L20.293 8.293L21.707 9.707L19.414 12L21.707 14.293L20.294 15.706ZM8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C11.9972 10.208 10.208 11.9972 8 12ZM8 6C6.9074 6.00111 6.01789 6.87885 6.00223 7.97134C5.98658 9.06383 6.85057 9.9667 7.94269 9.99912C9.03481 10.0315 9.95083 9.1815 10 8.09V8.49V8C10 6.89543 9.10457 6 8 6Z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </div>
  );
}
