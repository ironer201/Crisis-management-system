# National Crisis Response

A web-based crisis management platform that enables citizens to report incidents, submit anonymous passive reports, register as volunteers, and allows authorities to monitor and respond to crises efficiently.

## Features

- **Quick Reports** — Submit emergency reports instantly from the home page
- **Passive Reporting** — Anonymous reporting for crimes like extortion, harassment, and eve-teasing, helping victims come forward safely
- **Volunteer Registration** — Citizens can register to assist during crises
- **Admin Dashboard** — Separate admin panel to view and manage quick reports, passive reports, and volunteer registrations
- **User Authentication** — Sign up and login system for secure access
- **Donation Page** — Support the platform through donations
- **Statistics Page** — Visual insights into reported incidents
- **Responsive Design** — Works across desktop and mobile devices

## Tech Stack

- **Frontend** — HTML, CSS, JavaScript
- **Backend** — Node.js with Express.js
- **Storage** — File-based (JSON/txt)
- **Key Dependencies** — `express`, `body-parser`, `multer`

## Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start the server
npm start
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
├── index.html              # Home page with quick report
├── passive.html            # Anonymous passive report form
├── volunteer.html          # Volunteer registration
├── admin.html              # Admin panel - quick reports
├── passive_admin.html      # Admin panel - passive reports
├── volunteer_admin.html    # Admin panel - volunteer data
├── login.html              # User login page
├── Donation.html           # Donation/funding page
├── statistics.html         # Incident statistics
├── contact.html            # Contact page
├── author.html             # Authorities page
├── server.js               # Express backend
├── admin panel/            # Admin panel assets
└── picture/                # Image assets
```

## License

MIT
