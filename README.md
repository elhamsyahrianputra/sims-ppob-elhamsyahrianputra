# SIMS PPOB - Aplikasi Pembayaran Online

Aplikasi web untuk manajemen pembayaran layanan digital (PPOB - Payment Point Online Bank) yang dibangun dengan React, TypeScript, dan teknologi web modern.

## 🚀 Fitur Utama

### Autentikasi (Authentication)
- **Login & Register**: Sistem autentikasi dengan JWT token
- **Protected Routes**: Halaman dilindungi dengan route guards
- **Public Routes**: Redirect otomatis jika sudah login

### Manajemen Profil
- **View Profile**: Tampilkan data profil pengguna
- **Edit Profile**: Update nama depan dan belakang
- **Upload Avatar**: Update foto profil dengan preview
- **Redux State Management**: Profile state disimpan di Redux untuk akses cepat

### Transaksi & Pembayaran
- **Balance Management**: Tampilan saldo realtime dengan Redux
- **Top Up Balance**: Isi ulang saldo dengan nominal custom atau quick amounts (Rp10.000 - Rp500.000)
- **Service Payment**: Bayar berbagai layanan (Pulsa, Listrik, Internet, dll)
- **Balance Validation**: Validasi saldo sebelum transaksi
- **Confirmation Modal**: Konfirmasi sebelum melakukan transaksi
- **Result Modal**: Feedback sukses/gagal dengan UI yang informatif
- **Auto Update**: Saldo dan history otomatis update setelah transaksi

### Riwayat Transaksi
- **Transaction History**: Tampilkan semua transaksi (Top Up & Payment)
- **Pagination**: Load more untuk history yang panjang
- **Date Format**: Format tanggal Indonesia yang mudah dibaca
- **Auto Refresh**: History otomatis update setelah transaksi baru

### Informasi
- **Banner Slider**: Banner promosi dengan autoplay
- **Service Menu**: Grid menu layanan dengan icon
- **Home Page**: Dashboard dengan balance card, service menu, dan banner

### Peningkatan UX
- **Dynamic Page Titles**: Setiap halaman punya title yang sesuai
- **Loading States**: Loading indicators untuk UX yang lebih baik
- **Error Handling**: Error message yang informatif
- **Toast Notifications**: Notifikasi (toast) untuk feedback cepat
- **Responsive Design**: Mobile-friendly UI

## 🛠️ Tech Stack (Teknologi)

### Core
- **React 19** - UI Library
- **TypeScript 5.9** - Type Safety
- **Vite 7** - Build Tool & Dev Server

### State Management
- **Redux Toolkit 2.5** - Global State Management
- **React Redux 9.2** - React bindings for Redux
- **TanStack Query (React Query) 5.65** - Server State Management & Caching

### Routing & Forms
- **React Router 7** - Client-side routing dengan loader pattern
- **React Hook Form 7.54** - Form state management
- **Zod 3.24** - Schema validation

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel/slider component
- **Sonner** - Toast notifications
- **clsx & tailwind-merge** - Conditional classnames

### HTTP & API
- **Axios 1.7** - HTTP client dengan interceptors

### Code Quality
- **Biome 1.9** - Linting & Formatting
- **ESLint** - Additional linting rules

## 📁 Struktur Folder

```
src/
├── core/
│   ├── components/
│   │   ├── guards/
│   │   │   ├── protected-route.tsx
│   │   │   └── public-route.tsx
│   │   ├── layouts/
│   │   │   └── navbar/
│   │   └── ui/
│   │       ├── button/
│   │       ├── form/
│   │       └── modal/
│   │           ├── confirmation-modal.tsx
│   │           └── result-modal.tsx
│   ├── hooks/
│   │   └── use-page-title.ts
│   ├── layouts/
│   │   ├── auth-layout.tsx
│   │   ├── dashboard-layout.tsx
│   │   └── profile-layout.tsx
│   ├── libs/
│   │   ├── axios/
│   │   │   └── api-client.ts
│   │   └── tanstack/
│   │       └── query-client.ts
│   ├── store/
│   │   ├── index.ts
│   │   └── hooks.ts
│   ├── types/
│   │   └── api.types.ts
│   └── utils/
│       ├── cn.ts
│       ├── format-date.ts
│       ├── format-rupiah.ts
│       └── token.ts
│
├── features/
│   ├── auth/
│   │   ├── hooks/
│   │   │   └── use-auth.ts
│   │   ├── pages/
│   │   │   ├── login-page.tsx
│   │   │   └── register-page.tsx
│   │   ├── schemas/
│   │   │   └── auth-schema.ts
│   │   ├── services/
│   │   │   └── auth-service.ts
│   │   └── types/
│   │       └── auth.types.ts
│   │
│   ├── information/
│   │   ├── components/
│   │   │   ├── banner-slider.tsx
│   │   │   └── service-menu.tsx
│   │   ├── hooks/
│   │   │   ├── use-banner.ts
│   │   │   └── user-menu.ts
│   │   ├── pages/
│   │   │   └── home-page.tsx
│   │   ├── services/
│   │   └── types/
│   │
│   ├── profile/
│   │   ├── components/
│   │   │   ├── avatar-upload.tsx
│   │   │   ├── profile-actions.tsx
│   │   │   ├── profile-card.tsx
│   │   │   └── profile-form.tsx
│   │   ├── hooks/
│   │   │   └── use-profile.ts
│   │   ├── pages/
│   │   │   └── profile-page.tsx
│   │   ├── schemas/
│   │   │   └── profile-schema.ts
│   │   ├── services/
│   │   │   └── profile.service.ts
│   │   ├── store/
│   │   │   └── profile-slice.ts
│   │   └── types/
│   │
│   └── transaction/
│       ├── components/
│       │   ├── balance-card.tsx
│       │   ├── quick-amount-button.tsx
│       │   └── topup-form.tsx
│       ├── hooks/
│       │   ├── use-balance.ts
│       │   ├── use-history.ts
│       │   └── use-transaction.ts
│       ├── pages/
│       │   ├── history-page.tsx
│       │   ├── topup-page.tsx
│       │   └── transaction-page.tsx
│       ├── schemas/
│       │   └── balance.schema.ts
│       ├── services/
│       │   ├── balance.service.ts
│       │   ├── history.service.ts
│       │   └── transaction.service.ts
│       ├── store/
│       │   └── balance-slice.ts
│       └── types/
│
├── main.tsx
└── index.css
```

### Penjelasan Struktur

#### **Feature-Based Architecture**
Aplikasi menggunakan **feature-based folder structure** di mana setiap feature/domain memiliki folder sendiri beserta semua kebutuhan (components, hooks, services, types, dll). Ini membuat code lebih modular dan mudah di-maintain.

#### **Core vs Features**
- **`core/`**: Berisi kode yang digunakan di banyak tempat (shared components, layouts, utils, Redux store configuration)
- **`features/`**: Berisi kode spesifik untuk setiap domain/fitur (auth, profile, transaction), termasuk Redux slices yang spesifik untuk feature tersebut

#### **Separation of Concerns**
- **Components**: UI components yang reusable
- **Hooks**: Custom hooks untuk logic & data fetching
- **Services**: API calls dengan axios
- **Store**: Redux slices untuk state management (di dalam folder feature masing-masing)
- **Types**: TypeScript interfaces & types
- **Schemas**: Zod validation schemas
- **Utils**: Helper functions

#### **State Management Strategy**

**Redux Toolkit (Global State)**:
- Balance: Sering diakses di banyak component (navbar, balance card, transaction) - di `features/transaction/store/`
- Profile: Data user yang dibutuhkan di berbagai tempat - di `features/profile/store/`

**React Query (Server State)**:
- Banners, Services: Data yang jarang berubah, cocok untuk caching
- Transaction History: Pagination & infinite scroll
- Profile Update: Mutation dengan optimistic updates

**Local State (useState)**:
- Form inputs: Controlled components
- Modal visibility: UI state yang temporary
- Loading states: Component-specific loading

**Keuntungan Kombinasi Redux + React Query**:
1. Redux untuk data yang sering diakses → performance boost
2. React Query untuk caching & background refetch → fresh data
3. Auto-sync dari React Query ke Redux → best of both worlds
4. Redux slices diletakkan di feature folder → better modularity & scalability

## ⚙️ Instalasi & Setup

### Prasyarat
- Node.js 18+ 
- npm atau yarn

### Install Dependencies (Pasang dependencies)

```bash
npm install
```

### Environment Variables (Variabel environment)

Buat file `.env` di root project:

```env
VITE_API_BASE_URL=https://take-home-test-api.nutech-integrasi.com
```

### Jalankan Development Server (Dev server)

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting & Formatting

```bash
npm run lint

npm run format
```

## 🏗️ Arsitektur & Design Patterns

### 1. **Feature-Based Modular Architecture**
Setiap feature (auth, profile, transaction) adalah module independen dengan struktur folder lengkap:
- ✅ **Scalable**: Mudah menambah feature baru
- ✅ **Maintainable**: Perubahan terisolasi per feature
- ✅ **Testable**: Setiap module bisa di-test sendiri

### 2. **Custom Hooks Pattern**
Semua logic & data fetching di-extract ke custom hooks:
```typescript
function ProfilePage() {
  const { data, isLoading } = useProfile();
  const { mutate } = useUpdateProfile();
}
```

### 3. **Service Layer Pattern**
API calls dipisah ke service layer:
```typescript
export const authService = {
  login: (data: LoginRequest) => apiClient.post<AuthResponse>('/login', data),
  register: (data: RegisterRequest) => apiClient.post<AuthResponse>('/registration', data),
}
```

### 4. **Schema Validation Pattern**
Validasi menggunakan Zod schema untuk type-safety:
```typescript
export const loginSchema = z.object({
  email: z.string().email('Email tidak valid'),
  password: z.string().min(8, 'Password minimal 8 karakter'),
})
```

### 5. **Protected & Public Routes**
Authentication guards untuk melindungi halaman:
- **ProtectedRoute**: Component wrapper yang mengecek autentikasi user. Jika user belum login, akan di-redirect ke halaman login
- **PublicRoute**: Component wrapper untuk halaman auth (login/register). Jika user sudah login, akan di-redirect ke homepage
- Implementasi menggunakan React Router Outlet pattern untuk nested routing

### 6. **Redux + React Query Integration**
- **Redux**: Global state (balance, profile) untuk data yang sering diakses
- **React Query**: Server state management dengan caching
- **Sync**: useEffect di custom hooks untuk sync dari React Query ke Redux
- **Location**: Redux slices diletakkan di feature folder masing-masing untuk better modularity

### 7. **Clean Code Principles**
- ✅ **Single Responsibility**: Setiap function/component punya 1 tugas
- ✅ **DRY**: Reusable components & hooks
- ✅ **Meaningful Names**: Variable & function names yang descriptive
- ✅ **Small Functions**: Function pendek & fokus

## 📝 Dokumentasi API

Base URL: `https://take-home-test-api.nutech-integrasi.com`

### Authentication
- `POST /registration` - Register user baru
- `POST /login` - Login user

### Profile
- `GET /profile` - Get user profile
- `PUT /profile/update` - Update profile
- `PUT /profile/image` - Upload profile image

### Transaction
- `GET /balance` - Get current balance
- `POST /topup` - Top up balance
- `POST /transaction` - Create transaction
- `GET /transaction/history` - Get transaction history

### Information
- `GET /banner` - Get banner list
- `GET /services` - Get service list

## 🎨 Fitur UI/UX

- **Loading States**: Loading indicators untuk UX yang lebih baik
- **Toast Notifications**: Real-time feedback
- **Modal Dialogs**: Confirmation & result modals
- **Responsive Design**: Mobile-first approach
- **Dynamic Page Titles**: SEO-friendly titles
- **Error Handling**: Error handling yang rapi (graceful)
- **Form Validation**: Real-time validation dengan error messages

## 👤 Author

**Elham Syahrian Putra**

## 📄 Lisensi

Project ini dibuat untuk keperluan technical assessment.
