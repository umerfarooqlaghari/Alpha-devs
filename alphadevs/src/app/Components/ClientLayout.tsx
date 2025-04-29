// 'use client'; // 👈 THIS LINE IS MANDATORY

// import { usePathname } from 'next/navigation';
// import ServicesComponent from './ServicesComponent/ServicesComponent';
// import AboutComponent from './AboutComponent/AboutComponent';
// import TestimonialsComponent from './TestimonialsComponent/TestimonialsComponent';
// import FooterComponent from './FooterComponent/FooterComponent';


// export default function ClientLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const isContactPage = pathname === '/contact';

//   return (
//     <>
//       {children}
//       {!isContactPage && (
//         <>
//           <ServicesComponent />
//           <AboutComponent />
//           <TestimonialsComponent />
//         </>
//       )}
//       <FooterComponent />
//     </>
//   );
// }

'use client';
import ServicesComponent from './ServicesComponent/ServicesComponent';
import AboutComponent from './AboutComponent/AboutComponent';
import TestimonialsComponent from './TestimonialsComponent/TestimonialsComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import { usePathname } from 'next/navigation';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import ContactComponent from './ContactUsComponent/ContactComponent';


export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isContactPage = pathname === '/contact';

  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen">
      <div className="flex w-full min-h-screen">
        <div className="flex flex-col flex-1 w-full">

          {/* ✅ Header Logic */}
          <HeaderComponent />

          <main className="flex-1 w-full">
            {children}

            {/* Page-specific sections below */}
            {isHome && (
              <>
                <ServicesComponent />
                <AboutComponent />
                <TestimonialsComponent />
                <FooterComponent/>
              </>
            )}

            {isContactPage && <ContactComponent />}
          </main>

        </div>
      </div>
    </div>
  );
}
