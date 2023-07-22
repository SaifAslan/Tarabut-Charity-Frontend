import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import StandardPageHero from "@/Shared/StandardPageHero";
import Image from "next/image";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params
//   const id = params.id

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }

const ActivityPage = () => {
  return (
    <div>
      <StandardPageHero
        title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className="container">
        <section className="our-activities-upper-body">
          <p className="content-wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            velit eget urna elementum, eget euismod est aliquet. Sed tristique,
            mi eu mattis tempus, neque nisi luctus nisi, a malesuada orci sapien
            eget est. Nam elementum, turpis vel fermentum tincidunt, turpis
            sapien varius neque, sit amet interdum quam turpis in dui. Nunc
            hendrerit bibendum lacus, eget pellentesque lorem vulputate ac.
            Etiam id gravida turpis. Sed tincidunt tortor a nisi ultrices, ac
            pharetra dui maximus. Suspendisse bibendum nisi ac metus
            sollicitudin, sit amet iaculis tellus porttitor. Vivamus aliquet
            semper rhoncus. Fusce in mauris ut mi tincidunt consequat. Fusce
            vehicula enim vel neque luctus fringilla. Ut nec odio vel justo
            tincidunt semper. Integer id sapien eu ex dapibus efficitur vel at
            nisi. In nec diam non libero hendrerit accumsan vel sit amet erat.
            Praesent rutrum mi eget sapien tristique, ac consequat sapien
            efficitur. Nulla facilisi. Pellentesque eget fermentum nulla. Nam id
            tristique mauris. Vivamus nec justo eget odio blandit convallis.
            Nunc dictum lectus vel mauris luctus fringilla. Suspendisse ac
            libero nec arcu mattis tincidunt. Pellentesque sit amet lorem ut
            ipsum posuere facilisis vel in urna. Nunc pulvinar ligula id orci
            sollicitudin, a ullamcorper erat tincidunt. Vivamus non rhoncus
            velit. Vestibulum ullamcorper elit eu nisl luctus consequat.
            Maecenas sit amet pharetra quam. Pellentesque at finibus quam.
            Suspendisse potenti. Nulla facilisi. Duis sit amet venenatis lectus.
            Ut rhoncus euismod mi, a efficitur libero elementum eu. Quisque eget
            ipsum at libero posuere malesuada eu eget sapien. Nam bibendum est
            at sapien convallis,
          </p>
          <Image
            // loader={()=>"loading..."}
            src={"/clothing.jpg"}
            alt={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            style={{ objectFit: "cover" }}
            loading="lazy"
            width={500}
            height={300}
            //   fill={true}
            //   onError={(e) => console.log(e)}
          />
        </section>
        <section className="our-activities-lower-body"> <p className="content-wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            velit eget urna elementum, eget euismod est aliquet. Sed tristique,
            mi eu mattis tempus, neque nisi luctus nisi, a malesuada orci sapien
            eget est. Nam elementum, turpis vel fermentum tincidunt, turpis
            sapien varius neque, sit amet interdum quam turpis in dui. Nunc
            hendrerit bibendum lacus, eget pellentesque lorem vulputate ac.
            Etiam id gravida turpis. Sed tincidunt tortor a nisi ultrices, ac
            pharetra dui maximus. Suspendisse bibendum nisi ac metus
            sollicitudin, sit amet iaculis tellus porttitor. Vivamus aliquet
            semper rhoncus. Fusce in mauris ut mi tincidunt consequat. Fusce
            vehicula enim vel neque luctus fringilla. Ut nec odio vel justo
            tincidunt semper. Integer id sapien eu ex dapibus efficitur vel at
            nisi. In nec diam non libero hendrerit accumsan vel sit amet erat.
            Praesent rutrum mi eget sapien tristique, ac consequat sapien
            efficitur. Nulla facilisi. Pellentesque eget fermentum nulla. Nam id
            tristique mauris. Vivamus nec justo eget odio blandit convallis.
            Nunc dictum lectus vel mauris luctus fringilla. Suspendisse ac
            libero nec arcu mattis tincidunt. Pellentesque sit amet lorem ut
            ipsum posuere facilisis vel in urna. Nunc pulvinar ligula id orci
            sollicitudin, a ullamcorper erat tincidunt. Vivamus non rhoncus
            velit. Vestibulum ullamcorper elit eu nisl luctus consequat.
            Maecenas sit amet pharetra quam. Pellentesque at finibus quam.
            Suspendisse potenti. Nulla facilisi. Duis sit amet venenatis lectus.
            Ut rhoncus euismod mi, a efficitur libero elementum eu. Quisque eget
            ipsum at libero posuere malesuada eu eget sapien. Nam bibendum est
            at sapien convallis, sit amet fringilla orci tincidunt. Sed semper
            nibh vitae elit dignissim, a pharetra dolor tempus. Cras vel sapien
            at neque posuere lobortis. Nunc eu odio ac lectus consectetur luctus
            ac nec ex. Vivamus a odio ex. Sed interdum magna ipsum, sit amet
            auctor purus consectetur id. Etiam malesuada feugiat arcu, eu
            rhoncus elit blandit eu. Integer auctor tincidunt nulla eu volutpat.
            Duis et arcu eu elit tempus interdum. Vivamus interdum, nisi vitae
            volutpat bibendum, lectus ligula elementum odio, eu consequat dui
            tellus vitae tortor. Nunc condimentum elit eget ipsum tincidunt
            fringilla. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Aenean vel elementum risus.
            Aliquam erat volutpat. Donec nec nisi eu metus faucibus luctus.
            Phasellus semper, erat eget consectetur dapibus, tortor neque
            scelerisque velit, eu suscipit sem justo nec enim. Donec sed nisi
            massa. Integer eu dui hendrerit, ultrices purus vel, posuere nisi.
            Ut ultrices felis eu felis fringilla, id bibendum purus volutpat.
            Nulla facilisi. Nunc vel neque velit. Fusce eu erat sit amet odio
            hendrerit bibendum nec eu nunc. Sed faucibus odio eu tortor
            tincidunt volutpat. Cras dictum arcu quis odio convallis, quis
            mattis odio sagittis. Etiam id nibh eu nulla dictum scelerisque.
            Vestibulum eget nibh ut turpis fringilla maximus at quis nisi.
            Aliquam sit amet neque semper, vestibulum nisi nec, auctor risus.
            Duis vel velit vel lectus dictum fermentum. Nulla facilisi. Nulla
            facilisi. Integer eget laoreet nulla, eu mollis velit. Nam auctor
            congue dapibus. Suspendisse sit amet gravida nisi, nec auctor justo.
            Nulla facilisi. Etiam tempus, nisi ac consectetur lacinia, tortor
            nisi lacinia purus, ut tincidunt nibh dui vel erat. Etiam aliquet
            nec metus eu ultrices. Aenean facilisis tellus non ultrices cursus.
          </p></section>
      </div>
    </div>
  );
};

export default ActivityPage;
