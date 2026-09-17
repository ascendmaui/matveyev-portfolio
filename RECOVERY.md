# Source recovery notes

Recovered 2026-09-17 from Vercel production matveyev-portfolio.

## Production SoT
- Live: https://matveyev-portfolio.vercel.app
- Project: matveyev-portfolio / prj_UOhzz43vKlLWFHa5RaSP8vxcTkaG
- Origin (Cursor): mat-lab/tmp-cede94315d0ed485 -- use Cursor for Origin polish if tree incomplete
- Lab GH john-matveyev-portfolio: 404

## Hygiene
Dictaste -> https://dictaste.vercel.app (not dictaste-site)

## Stub
https://john-matveyev-portfolio.vercel.app (~1.9 KB) -- redirect/archive onto matveyev-portfolio after John OK.

## Clemson
Out of scope.

## Missing large components
MCP truncates large deployment file payloads. Remaining UIDs (SHA1) for Origin polish / Vercel file fetch:
- app/globals.css 50ffe16079e4d2532c4182553e83398ba8532a86
- app/layout.tsx afc2ee459367c45b515ed9c17a9b9854fcec56cf
- app/opengraph-image.tsx 7684257c310b0a42311c59a40e98d29edb176462
- app/page.tsx 04cb64c16c8d78ba7c28c7d2c48e9eb057aac41e
- components/approach.tsx d13536a5cbf2fd04c55b21d41ad83e9936d55b76
- components/contact.tsx 9bc8b54d9668121a0232c44e2981afa45012d6af
- components/featured-project.tsx 103d48120e93fc44ba4cca27a43a60b58623aa53
- components/hero.tsx 4d122264fe16e49e859387774a46ac7f21facc88
- components/magnetic.tsx fefcefe7635930f0be8bb6d93186cdcab86d7572
- components/project-row.tsx a2ba2ea8ef2e1ac14fb01c2a75fe12bf3b20d50e
- components/reveal.tsx f889812be5a011763c6c70380c875ddb6257187c
- components/selected-work.tsx e2aa368f738056846c80319db3008e8d7b2e4d8a
- components/three/hero-canvas.tsx 88a9fea49a22315084c953f765a5b12f72faf9ea
- components/three/hero-visual.tsx 447b295f2da982fd3633ffd2ecd00614c6969762
- components/three/signal-field.tsx 766bcd259c0273fa4a7125d609d160077ddf5c63
- components/url-frame.tsx cea884f00188dab3b59abb9c1f0144bbf6aff71d
