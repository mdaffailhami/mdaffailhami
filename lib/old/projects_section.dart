import 'package:flutter/material.dart';

class MyProjectsSection extends StatelessWidget {
  const MyProjectsSection({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Projects', style: Theme.of(context).textTheme.headline1),
        const Divider(),
        Wrap(
          spacing: 20,
          runSpacing: 20,
          children: const [
            MyProjectCard(),
            MyProjectCard(),
            MyProjectCard(),
          ],
        )
      ],
    );
  }
}

class MyProjectCard extends StatelessWidget {
  const MyProjectCard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Wrap(
      children: [
        ClipRRect(
          borderRadius: BorderRadius.all(Radius.circular(10)),
          child: Container(
            width: 160,
            color: Theme.of(context).colorScheme.secondaryVariant,
            child: Wrap(
              children: [
                Image(
                  image: AssetImage('assets/profile.jpg'),
                  fit: BoxFit.cover,
                  width: double.infinity,
                  height: 160,
                ),
                SelectableText(
                  'Ngetes Lur',
                  style: Theme.of(context).textTheme.headline3,
                ),
                SelectableText(
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam ante, faucibus ut congue eget, imperdiet non lorem. Vivamus convallis pretium orci et tincidunt.',
                  maxLines: 4,
                  style: Theme.of(context)
                      .textTheme
                      .bodyText2
                      ?.copyWith(fontWeight: FontWeight.w200),
                )
              ],
            ),
          ),
        )
      ],
    );
  }
}
