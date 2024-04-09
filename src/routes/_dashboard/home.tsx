import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/home')({
  component: () => <div>Hello /_dashboard/home!</div>
})