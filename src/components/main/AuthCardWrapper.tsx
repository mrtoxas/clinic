import Link from "next/link";

interface SignCardWrapperProps {
  title: string;
  footerLinkTitle: string;
  footerLinkHref: string;
  form: JSX.Element;
}

export const AuthCardWrapper = (props: SignCardWrapperProps) => {
  const { title, footerLinkTitle, footerLinkHref, form } = props;

  return (
    <>
      <h1 className="font-bold text-xl text-center text-primary uppercase">{title}</h1>
      {form}
      <div className="text-center text-sm mt-4">
        <Link className="text-primary hover:underline-offset-2 hover:underline" href={footerLinkHref}>{footerLinkTitle}</Link>
      </div>
    </>
  )

}