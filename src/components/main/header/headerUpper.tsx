import { Container } from "@/components/ui/container"
import Image from 'next/image'
import Link from 'next/link'
import { MapPinIcon, Clock9Icon } from "@/components/ui/icons"

const logoAltText = `${process.env.COMPANY_NAME} logo`;

export const HeaderUpper = () => {
  return (
    <Container className="flex justify-between items-center px-4 py-4">
      <div className="m-auto sm:m-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt={logoAltText}
            width={240}
            height={67}
            priority="high"
          />
        </Link>
      </div>
      <div className="hidden sm:flex justify-between items-center">
        <div className="grid lg:border-r-2 lg:pr-4">
          <div className="text-sm text-primary-dark">Невідкладна допомога</div>
          <div>
            <Link className="font-semibold text-lg text-primary hover:text-destructive" href="tel:888-123-4567">888-123-4567</Link></div>
        </div>
        <div className="hidden lg:grid gap-3 grid-cols-[auto,1fr] items-center text-sm text-primary-dark border-r-2 px-4">
          <MapPinIcon className="text-primary" size={"32"} />
          <div className="grid gap-1">
            <div>18001, Україна, Черкаси</div>
            <div>вул. Припортова, 55</div>
          </div>
        </div>
        <div className="hidden lg:grid gap-3 grid-cols-[auto,1fr] items-center text-sm text-primary-dark pl-4">
          <Clock9Icon className="text-primary" size={28} />
          <div className="grid gap-1">
            <div>Пн-Пт 8:00 - 20:00</div>
            <div>Пн-Пт 8:00 - 15:00</div>
          </div>
        </div>
      </div>
    </Container>
  )
}