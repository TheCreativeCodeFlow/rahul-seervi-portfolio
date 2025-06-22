declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void
      send: (serviceID: string, templateID: string, templateParams: any) => Promise<any>
    }
  }
}

export {}
