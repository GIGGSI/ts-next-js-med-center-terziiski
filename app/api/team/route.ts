import { NextResponse } from "next/server";
import ourTeam from "./ourTeam.json";

export async function GET(request: any) {
  return NextResponse.json(ourTeam);
}
