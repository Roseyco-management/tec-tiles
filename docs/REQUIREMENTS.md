# Tec Tiles - Requirements Document

**Date**: 2024-12-05
**Author**: Bailey Barry
**Status**: Draft

---

## 1. Problem & Solution

**Problem**: Tec Tiles has an existing e-commerce site (tec-tiles.com) but wants a redesign to match the quality and layout of competitors like Tiles Direct.

**Target Users**:
- **Customers**: Homeowners, contractors, interior designers looking to purchase premium tiles
- **Admin Staff**: Tec Tiles employees managing products, orders, and customers

**Current Solutions**:
- Live website at tec-tiles.com (functional e-commerce)
- Location: Unit 2, Glyn Square, Milton Keynes
- Phone: +44 7931 993010
- Products: Wall tiles, floor tiles, outdoor tiles, PVC panels, acoustic panels, SPC flooring, accessories
- Features: Free UK delivery over £599, Price match guarantee

**Our Advantage**:
- Full e-commerce capability with online ordering
- Dedicated admin dashboard for business management
- Customer portal for order tracking and account management
- Professional, branded experience matching Tec Tiles identity

---

## 2. Business Model

**Revenue Model**: Direct retail sales
- [x] E-commerce (sell tiles directly to customers)

**Payment Flow**:
```
Customer → Stripe → Tec Tiles receives payment
```

**Pricing**: Standard retail pricing set by Tec Tiles in admin dashboard

---

## 3. Budget Constraints

**Monthly Budget**: $500+/month (enterprise level)

**Already Paying For**: TBD (confirm with client)

**Available Services at this budget**:
- Supabase Pro ($25/mo)
- Vercel Pro ($20/mo)
- Stripe (2.9% + 30¢ per transaction)
- Resend ($20/mo)
- Monitoring/Analytics tools

---

## 4. Timeline Constraints

**Launch Goal**: 4-6 weeks (ASAP)

**Time Available**: TBD

**Team**: Developer + AI assistance

**Constraint**: Fast delivery for client - ship MVP quickly, iterate

---

## 5. Technical Constraints

**Existing Code**: Yes (reference project)

**Current Stack**: React + Vite + Tailwind (frontend only, no backend)

**What Works**:
- Homepage components (Header, Hero, Footer, FeaturedCategories, etc.)
- Brand colors and styling established
- Logo asset

**What Doesn't Work**:
- No backend/database
- No authentication
- No e-commerce functionality
- No admin dashboard
- No client dashboard

**Decision**: Start fresh with Next.js + Supabase, reuse design patterns and assets from old project

**Skills**:
- **Strong In**: React, Next.js, TypeScript, Tailwind
- **Weak In**: N/A
- **Want to Avoid**: Custom infrastructure (use managed services)

---

## 6. Feature Scope (Rough Draft)

### Core Features (Must Have for MVP)

**Storefront**:
1. Homepage with hero, categories, featured products
2. Product listing pages (by category)
3. Product detail pages with images, variants, add to cart
4. Shopping cart
5. Checkout with Stripe
6. Order confirmation

**Client Dashboard**:
1. Login/Register
2. Order history
3. Order tracking
4. Address book
5. Account settings

**Admin Dashboard**:
1. Login (admin only)
2. Product management (CRUD)
3. Order management (view, update status)
4. Customer list
5. Category management
6. Basic analytics (sales overview)

### Nice-to-Have (Defer if Needed)
1. Wishlist - Can add post-MVP
2. Product reviews - Can add post-MVP
3. Promo codes/discounts - Can add post-MVP
4. Email marketing integration - Can add post-MVP
5. Advanced analytics - Can add post-MVP

### Deal-Breakers (Must Be Perfect)
1. **Checkout/Payments** - Customers must be able to pay successfully
2. **Product display** - Products must show correctly with images
3. **Order processing** - Admin must be able to see and manage orders
4. **Mobile responsive** - Most users browse on mobile

---

## 7. User Roles & Permissions

**Roles**:
1. **Admin** - Full access to admin dashboard, manage products/orders/customers
2. **Customer** - Access to storefront and client dashboard for their own account

**RBAC Needed?**: Yes (admin vs customer separation)

**Multi-Tenant?**: No (single tenant - Tec Tiles only)

---

## 8. Data & Storage Needs

**Data Types**:
- [x] User data (auth)
- [x] Content (text, images)
- [ ] Videos (not needed)
- [ ] Documents/PDFs (not needed initially)
- [x] Analytics/logs

**Storage Estimate**:
- Product images: ~5-10GB (assume 500 products × 5 images × 2MB avg)
- Database: < 1GB

**Video Hosting**: No

---

## 9. Integrations & Third-Party Services

**Required Integrations**:
1. **Stripe** - Payment processing
2. **Resend** - Transactional emails (order confirmations, password reset)
3. **Supabase Auth** - Authentication
4. **Supabase Storage** - Product images

**Social Login**: Optional
- Google login (nice to have)
- Email/password (required)

---

## 10. Security & Compliance

**Sensitive Data**:
- [x] Payments (handled by Stripe - PCI compliant)
- [ ] Health data (N/A)
- [ ] European users (may need GDPR if UK/EU customers)
- [ ] Children under 13 (N/A)

**Multi-Tenant Data Isolation**: No (single business)

**Auth Requirements**:
- [x] Email/password
- [ ] Social login (optional)
- [ ] Magic links (optional)
- [ ] 2FA/MFA (Phase 11+)

**Compliance Needs**:
- [ ] GDPR (if EU/UK customers - add privacy policy, data deletion)
- [ ] Cookie consent

---

## 11. Success Metrics (MVP)

**MVP Goal**: Functional e-commerce site where customers can browse products, add to cart, checkout, and admin can manage everything

**Metrics**:
- Site is live and functional
- First order processed successfully
- Admin can manage products and orders
- No critical bugs

**Timeline**: 4-6 weeks

---

## 12. Risks & Assumptions

**Assumptions**:
1. Client will provide product data/images or we'll use placeholders
2. Stripe account already exists or can be set up quickly
3. Domain/hosting can be configured quickly

**Risks**:
1. **Product data not ready** - Likelihood: Medium - Mitigation: Use placeholder data, admin can update later
2. **Timeline too aggressive** - Likelihood: Medium - Mitigation: Cut P2 features first
3. **Scope creep** - Likelihood: High - Mitigation: Stick to MVP features, defer to Phase 11+

---

## 13. Out of Scope (Phase 11+)

**Explicitly NOT Building in MVP**:
- Advanced analytics dashboard
- Email marketing campaigns
- Loyalty/rewards program
- Multi-language support
- Advanced shipping calculations
- Inventory management with low-stock alerts
- Customer reviews and ratings
- Wishlist functionality
- Gift cards
- Related products/recommendations engine

**Why Deferred**: Not critical for initial launch, can add based on client feedback

---

## ✅ Requirements Sign-Off

- [x] Problem & solution clearly defined
- [x] Budget constraints documented
- [x] Timeline realistic (aggressive but doable)
- [x] Core features identified
- [x] Risks acknowledged

**Ready to proceed to Discovery phase**: Yes

**Next Step**: MVP-MASTER-PLAN.md
