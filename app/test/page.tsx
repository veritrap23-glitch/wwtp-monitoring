import sql from '@/lib/db'

export default async function TestPage() {
  const data = await sql`
    SELECT * FROM internal_test
  `

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">
        Neon Connection Success
      </h1>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}