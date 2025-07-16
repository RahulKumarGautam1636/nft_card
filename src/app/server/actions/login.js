'use server'
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { parseData } from "@/api/actionUtils";

export async function getUserFromToken() {
  let token = await cookies();
  token = token.get("token")?.value;
  if (!token) return null;
  try {
    const decoded = jwt.verify( token, process.env.JWT_SECRET );
    return decoded;
  } catch (err) {
    return null;
  }
}


export async function logout() {

    cookies().delete("token");

    return parseData({status: 200, message: 'Logged out successfully!'})
}
