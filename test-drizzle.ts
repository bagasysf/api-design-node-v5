// test-drizzle.ts
import { db } from './src/db/connection.ts' // Your drizzle instance
import { sql } from 'drizzle-orm'

async function testDrizzle() {
  try {
    const result = await db.execute(
      sql`SELECT NOW() as time, version() as version`
    )
    console.log('✅ Drizzle connected successfully!')
    console.log('📅 Time:', result.rows[0])
  } catch (error) {
    console.error('❌ Connection failed:', error)
    process.exit(1)
  }
}

testDrizzle()
