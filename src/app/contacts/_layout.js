
export default function RootLayout({ children }) {
    return (
     
       <div>
          <div>SUB NAVIGATION</div>
          {children}
          <div>SUB FOOTER</div>
        </div>
    )
  }