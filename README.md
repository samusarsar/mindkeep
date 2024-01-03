<div style="display: flex; justify-content:center; margin-bottom:20px">
    <img src="/public/logo.png" width="200">
</div>

# MindKeep

`MindKeep` is the connected environment and workspace for new-age mindkeeping.

**Languages:** <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="20"> <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" height="20">

**Frameworks:** <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" height="20"> <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" height="20"> <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" height="20">

**Libraries:** <img src="https://img.shields.io/badge/Shadcn--UI-black?style=for-the-badge&logo=Shadcn--UI.js&logoColor=white" height="20"> <img src="https://img.shields.io/badge/blocknote-00FFFF?style=for-the-badge&logoColor=white" height="20"> <img src="https://img.shields.io/badge/Zustand-9F2B68?style=for-the-badge&logo=Zustand&logoColor=white" height="20">

**Linters:** <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" height="20">

**Databases:** <img src="https://img.shields.io/badge/Convex-9F2B68?style=for-the-badge&logo=Convex&logoColor=white" height="20"> <img src="https://img.shields.io/badge/EdgeStore-FFA500?style=for-the-badge&logo=EdgeStore&logoColor=white" height="20">

**Browsers:** <img src="https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white" height="20"> <img src="https://img.shields.io/badge/Safari-000000?style=for-the-badge&logo=Safari&logoColor=white" height="20"> <img src="https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white" height="20"> <img src="https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white" height="20"> <img src="https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white" height="20">

## <img src="https://firebasestorage.googleapis.com/v0/b/dare2fit-f6eb4.appspot.com/o/assets%2Flogos%2Fdare2fit-05-circle.png?alt=media&token=c266cfd5-d1be-4e93-91f2-ef7a7f5c9fba&_gl=1*137k9cg*_ga*MjExMzk5MTA5MC4xNjgzMjcwMjg1*_ga_CW55HF8NVT*MTY4NjU2MTgyMi45OS4xLjE2ODY1NjE5NTEuMC4wLjA."  width="50" height="50"> Why MindKeep?

-   Your Ideas, Documents, & Plans. Unified. Welcome to `MindKeep`!
-   Create notes/documents for any and all of your needs.
-   Structure, style, and order them entirely to your liking with our interactive editor!
-   Share your <i>mindkeeps</i> with anyone you like!

## <img src="https://firebasestorage.googleapis.com/v0/b/dare2fit-f6eb4.appspot.com/o/assets%2FREADME-images%2Ffeatures.png?alt=media&token=e5fc5779-b3db-41c2-a576-947ca382ea5a&_gl=1*81oei1*_ga*MjExMzk5MTA5MC4xNjgzMjcwMjg1*_ga_CW55HF8NVT*MTY4NjU3Njg5Ni4xMDMuMS4xNjg2NTc3OTgzLjAuMC4w"  width="30" height="30"> Features

-   Want to join?
    -   Head right on to the `Log In` page and switch over to the `Sign Up` view.
    -   Then select which method you'd like to create your account with;
-   Already a member?
    -   Make sure to `Log In` to re-enter your profile and enter `MindKeep`;
-   Integrate different headings, lists, tables, paragraphs, and images within your documents.
-   Select, change, and remove icons for your documents to style and easily identify them.
-   Select, change, and remove cover pages for your documents.
-   Archive and delete forever any documents you no longer need.
-   Publish documents with a shareable link to allow others to access read-only versions of them!
-   **Welcome to your ultimate `MindKeep`!** ;)

## <img src="https://firebasestorage.googleapis.com/v0/b/dare2fit-f6eb4.appspot.com/o/assets%2FREADME-images%2Fstart.png?alt=media&token=ee8cc2b3-1a61-4519-9f96-59177216b4d6&_gl=1*t5p8co*_ga*MjExMzk5MTA5MC4xNjgzMjcwMjg1*_ga_CW55HF8NVT*MTY4NjU3Njg5Ni4xMDMuMS4xNjg2NTc4MDEzLjAuMC4w"  width="30" height="30"> Getting Started

### Visit site on Vercel-Hosted address:

1. Visit the [mindkeep _vercel-hosted website_](https://mindkeep-1v0zxgupl-samusar1.vercel.app/);
2. Enjoy `MindKeep`!

## <img src="https://firebasestorage.googleapis.com/v0/b/dare2fit-f6eb4.appspot.com/o/assets%2FREADME-images%2Fdatabase.png?alt=media&token=958f4c41-6532-4e07-a31d-e437ebe00527&_gl=1*o97b6d*_ga*MjExMzk5MTA5MC4xNjgzMjcwMjg1*_ga_CW55HF8NVT*MTY4NjU3Njg5Ni4xMDMuMS4xNjg2NTc3OTQ0LjAuMC4w"  width="30" height="30"> Database Scheme (Structure)

### Documents Schema:

-   **title**: string
-   **userId**: string
-   **isArchived**: boolean
-   **parentDocument**?: Id<"documents">
-   **content**: string
-   **coverImage**: string
-   **icon**: string
-   **isPublished**: boolean

## <img src="https://firebasestorage.googleapis.com/v0/b/dare2fit-f6eb4.appspot.com/o/assets%2FREADME-images%2Fcommunity.png?alt=media&token=893ecd6f-908b-4c1e-9223-25d82f1bb8b1&_gl=1*watnuy*_ga*MjExMzk5MTA5MC4xNjgzMjcwMjg1*_ga_CW55HF8NVT*MTY4NjU3Njg5Ni4xMDMuMS4xNjg2NTc3OTI1LjAuMC4w"  width="30" height="30"> Community and Contributions

The `MindKeep` platform is developed by **samu.sar**.
