import { db } from './connection.ts'
import { users, habits, entries, tags, habitTags } from './schema.ts'
import { pathToFileURL } from 'node:url'

const seed = async () => {
  console.log(`🌱 Starting database seed...`)

  try {
    console.log(`Clearing existing data...`)

    await db.delete(users)
    await db.delete(entries)
    await db.delete(habits)
    await db.delete(tags)
    await db.delete(habitTags)

    console.log(`Creating demo user...`)
    const [demoUser] = await db
      .insert(users)
      .values({
        email: 'demo@app.com',
        password: 'password',
        firstName: 'demo',
        lastName: 'person',
        username: 'demo',
      })
      .returning()

    console.log(`Creating tag...`)
    const [healthTag] = await db
      .insert(tags)
      .values({
        name: 'Health',
        color: '#f0f0f0',
        userId: demoUser.id,
      })
      .returning()

    console.log(`Creating habit...`)
    const [exerciseHabit] = await db
      .insert(habits)
      .values({
        userId: demoUser.id,
        name: 'Excercise',
        description: 'Daily Workout',
        frequency: 'daily',
        targetCount: 1,
      })
      .returning()

    console.log(`Creating habitTag...`)
    await db.insert(habitTags).values({
      habitId: exerciseHabit.id,
      tagId: healthTag.id,
    })

    console.log(`Adding completion entries...`)
    const today = new Date()
    today.setHours(12, 0, 0, 0)

    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)

      await db.insert(entries).values({
        habitId: exerciseHabit.id,
        completionDate: date,
      })
    }

    console.log(`✅ DB seeded successfully`)
    console.log(`User credentials:`)
    console.log(`Email: ${demoUser.email}`)
    console.log(`Username: ${demoUser.username}`)
    console.log(`Password: ${demoUser.password}`)
  } catch (e) {
    console.error('❌ seed failed', e)
    process.exit(1)
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  seed()
    .then(() => {
      console.log(`✨ Seed finished successfully`)
      process.exit(0)
    })
    .catch((e) => {
      console.error(`💥 Fatal error:`, e)
      process.exit(1)
    })
}

export default seed
