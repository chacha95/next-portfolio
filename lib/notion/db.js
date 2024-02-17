import { notion } from "./client";

export async function getDBPortfolio() {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  })

  return res.results
}

export async function getUsers() {
  const listUsersResponse = await notion.users.list({});
  console.log(listUsersResponse)
}
