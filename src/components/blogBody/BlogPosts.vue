<template>
  <div id="blogPosts">
    <b-container>
      <b-row>
      <!-- loop over posts -->
        <b-col lg="6" sm="12" v-for="(post, index) in posts" :key="post.id">
        <!-- display posts as cards -->
          <b-card
            :title="post.title"  
            :img-src="post.thumbnailUrl"
            img-alt="Image"
            img-top
            tag="article"
            class="my-4 post_card"
            @click="
              $router.push({
                name: 'postdetails',
                params: { id: post.id, post: posts[index] }
              })"
          ></b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'BlogPosts',
  data() {
    return {
      //posts data
      posts: [
        {
          userId: 1,
          id: 1,
          title:
            'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          url: 'https://picsum.photos/id/0/5616/3744',
          thumbnailUrl: 'https://picsum.photos/id/0/5616/3744',
          body:
            'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        },
        {
          userId: 1,
          id: 2,
          title: 'qui est esse',
          url: 'https://picsum.photos/id/1/5616/3744',
          thumbnailUrl: 'https://picsum.photos/id/1/5616/3744',
          body:
            'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
        },
        {
          userId: 2,
          id: 3,
          title: 'et ea vero quia laudantium autem',
          url: 'https://picsum.photos/id/10/2500/1667',
          thumbnailUrl: 'https://picsum.photos/id/10/2500/1667',
          body:
            'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi'
        },
        {
          userId: 2,
          id: 4,
          title: 'in quibusdam tempore odit est dolorem',
          url: 'https://picsum.photos/id/100/2500/1656',
          thumbnailUrl: 'https://picsum.photos/id/100/2500/1656',
          body:
            'itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio'
        },
        {
          userId: 3,
          id: 5,
          title: 'asperiores ea ipsam voluptatibus modi minima quia sint',
          url: 'https://picsum.photos/id/1000/5626/3635',
          thumbnailUrl: 'https://picsum.photos/id/1000/5626/3635',
          body:
            'repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt'
        },
        {
          userId: 3,
          id: 6,
          title: 'dolor sint quo a velit explicabo quia nam',
          url: 'https://picsum.photos/id/1001/5616/3744',
          thumbnailUrl: 'https://picsum.photos/id/1001/5616/3744',
          body:
            'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse'
        },

        {
          userId: 4,
          id: 7,
          title: 'ullam ut quidem id aut vel consequuntur',
          url: 'https://picsum.photos/id/1002/4312/2868',
          thumbnailUrl: 'https://picsum.photos/id/1002/4312/2868',
          body:
            'debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae'
        },
        {
          userId: 4,
          id: 8,
          title: 'doloremque illum aliquid sunt',
          url: 'https://i.picsum.photos/id/1012/3973/2639.jpg',
          thumbnailUrl: 'https://i.picsum.photos/id/1012/3973/2639.jpg',
          body:
            'deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime'
        },

        {
          userId: 5,
          id: 9,
          title: 'non est facere',
          url: 'https://picsum.photos/id/1005/5760/3840',
          thumbnailUrl: 'https://picsum.photos/id/1005/5760/3840',
          body:
            'molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe'
        },
        {
          userId: 5,
          id: 10,
          title:
            'commodi ullam sint et excepturi error explicabo praesentium voluptas',
          url: 'https://picsum.photos/id/1006/3000/2000',
          thumbnailUrl: 'https://picsum.photos/id/1006/3000/2000',
          body:
            'odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut'
        },
        {
          userId: 6,
          id: 11,
          title: 'soluta aliquam aperiam consequatur illo quis voluptas',
          url: 'https://picsum.photos/id/1008/5616/3744',
          thumbnailUrl: 'https://picsum.photos/id/1008/5616/3744',
          body:
            'sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem'
        },
        {
          userId: 6,
          id: 12,
          title: 'qui enim et consequuntur quia animi quis voluptate quibusdam',
          url: 'https://i.picsum.photos/id/101/2621/1747.jpg',
          thumbnailUrl: 'https://i.picsum.photos/id/101/2621/1747.jpg',
          body:
            'iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum'
        }
      ]
    };
  }
};
</script>
