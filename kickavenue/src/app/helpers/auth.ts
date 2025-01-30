/** @format */
"use server";
// import { User } from "next-auth";
import { jwtDecode } from "jwt-decode";
import { User } from "next-auth";
// import { cookies } from "next/headers";
// const url = process.env.AUTH_API_URL || "";
const api_url = process.env.API_URL || "";

export const login = async (credentials: Partial<Record<string, unknown>>) => {
  //http:localhost:8002/api/auth {email, password}
  const response = await fetch(api_url + "/api/auth", {
    method: "POST",
    body: JSON.stringify(credentials),
    next: {
      revalidate: 0,
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const json = await response.json();
  const user = jwtDecode(json.data.access_token) as User;
  user.access_token = json.data.access_token;

  return user;
};

export const register = async (newUser: {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}) => {
  const response = await fetch(api_url + "/api/auth/new", {
    method: "POST",
    body: JSON.stringify(newUser),
    next: {
      revalidate: 0,
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  await response.json();
  return "New user has been registered";
};
