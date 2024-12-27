import { RouterProvider } from '@tanstack/react-router'
import { createRoot } from 'react-dom/client'
import '../services/sentry'
import './base.scss'
import './i18n'
import { plausible } from './plausible'
import { router } from './router'

// Ensure this matches the ID in index.html
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(<RouterProvider router={router} />)

plausible.enableAutoPageviews()
