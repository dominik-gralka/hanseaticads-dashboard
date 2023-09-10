import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    // Check if email address is in active leads table
    // If yes, return lead data
    // If no, return undefined

    const session = await getServerSession();
    const email = session?.user?.email ?? '';

}