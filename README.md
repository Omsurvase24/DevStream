# DevStream

DevStream is a video streaming platform built **for developers**, offering a suite of powerful features to create, share, and interact with live streams. Leveraging RTMP/WHIP protocols, real-time chat, and a modern Next.js frontend, DevStream empowers creators with everything they need to build a streaming community.

---

## 🚀 Key Features

- 📡 **Streaming** using RTMP / WHIP protocols
- 🌐 **Ingress generation** for easy stream setup
- 🔗 **OBS / Streaming software integration** with Next.js
- 🔐 **Authentication** (via Supabase)
- 📸 **Thumbnail upload** for streams
- 👀 **Live viewer count**
- 🚦 **Live status** indicators (online/offline)
- 💬 **Real-time chat** powered by WebSockets
- 🎨 **Unique chat color** per viewer
- 👥 **Following system** (follow/unfollow creators)
- 🚫 **Blocking system** (block/unblock users)
- 👢 **Kick participants** from a stream in real-time
- 🎛️ **Streamer Dashboard** (manage streams, view stats)
- 🐢 **Slow chat mode** (limit message rate)
- 🔒 **Followers-only chat mode**
- 📴 **Enable/Disable chat** on demand
- 🔽 **Collapsible layout** (theatre mode, hide sidebars)
- 📚 **Sidebar**: Following & Recommendations tabs
- 🏠 **Home page**: Streams recommended & sorted by live first
- 🔍 **Search page**: Filter & discover streams with custom layout
- 🔄 **Webhook sync**:
  - Sync user data to database
  - Sync live status to database
- 🎨 **Beautiful design** with Tailwind CSS
- ⚡ **Blazing fast** performance (Next.js + SSR)
- 📄 **Server-Side Rendering** for SEO & performance
- 🗺️ **Grouped routes & layouts** for clean architecture
- 🗃️ **MySQL** database
- 🚀 **Ready for Deployment** (Docker / Vercel / custom)

---

## Screenshots

### Authentication page

![auth](/screenshots/ssAuth.jpeg)

### Ongoing live stream

![onGoingliveStream](/screenshots/Screenshot%20DevStream%20LiveStream.png)

### OBS setup

![obsSetup](/screenshots/Screenshot%20DevStrream%20OBS.png)

### Stream key

![streamKey](/screenshots/Screenshot%20DevStream%20StreamKey.png)

### Chat settings

![chatSettings](/screenshots/Screenshot%20DevStream%20Chat%20settings.png)

## 📦 Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/Omsurvase24/DevStream.git
   cd DevStream
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # or using pnpm
   pnpm install

   # or using yarn
   yarn install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and populate with:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   DATABASE_URL=mysql://user:pass@host:3306/dbname
   RTMP_INGRESS_ENDPOINT=https://your-ingress-endpoint
   OBS_STREAM_KEY=your-obs-stream-key
   JWT_SECRET=your-jwt-secret
   ```

4. **Initialize the database**
   ```bash
   npx prisma migrate dev --name init
   ```

---

## ⚙️ Running Locally

Start the development server:

```bash
npm run dev
# or
pnpm run dev
# or
yarn dev
```

- **Frontend**: http://localhost:3000
- **RTMP Ingress**: as configured in your environment
- **OBS / Your streaming software**: point at the RTMP endpoint + stream key

---

## 🛠️ Usage

1. **Sign up / Log in** with your developer account.
2. **Go to Dashboard** ➔ Create a new stream, upload a thumbnail, and copy the RTMP/WHIP URL & key.
3. **Open OBS** (or any RTMP-compatible software), paste the URL & key, and hit ▶️ **Start Streaming**.
4. **Interact** with viewers in real-time chat, manage chat modes (slow, followers-only), and kick/block as needed.
5. **Explore** the Home page or Search page to discover other streams and follow creators you like.

---

## 🎨 Deployment

DevStream can be deployed on platforms like Vercel, AWS, or DigitalOcean. For a Docker-based setup:

```dockerfile
# Example Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

1. Build the image: `docker build -t devstream .`
2. Run a container:
   ```bash
   docker run -d      -e NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL      -e NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY      -e DATABASE_URL=$DATABASE_URL      -e RTMP_INGRESS_ENDPOINT=$RTMP_INGRESS_ENDPOINT      -e OBS_STREAM_KEY=$OBS_STREAM_KEY      -p 3000:3000      devstream
   ```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b my-feature`
3. Commit your changes: `git commit -m "Add awesome feature"`
4. Push to your branch: `git push origin my-feature`
5. Open a Pull Request

Please adhere to the existing code style and include tests where applicable.

---
