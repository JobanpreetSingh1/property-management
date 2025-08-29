
# StayNest Backend (Express + MongoDB + JWT)
## Quick Start
1) `npm install`
2) Copy `.env.example` to `.env` and set your values
3) Run MongoDB locally (or set a cloud URI)
4) `npm run dev` (default: http://localhost:4000)

## API
- `POST /api/auth/signup` { name, email, password }
- `POST /api/auth/login` { email, password } → { token }
- `GET /api/properties` (query: location, type, minPrice, maxPrice)
- `GET /api/properties/:id`
- `POST /api/properties` (auth) body: { title, location, price, type, description, image }
- `PUT /api/properties/:id` (auth)
- `DELETE /api/properties/:id` (auth)
- `POST /api/bookings` (auth) { propertyId }
- `GET /api/bookings/me` (auth)
- `GET /api/bookings` (admin only)
- `PUT /api/bookings/:id` (admin only) { status }
