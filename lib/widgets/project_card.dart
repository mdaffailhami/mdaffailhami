import 'package:flutter/material.dart';

class MyProjectCard extends StatelessWidget {
  const MyProjectCard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 160,
      height: 200,
      child: Card(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        clipBehavior: Clip.hardEdge,
        color: Theme.of(context).colorScheme.surface,
        child: Column(
          children: [
            Expanded(
              flex: 5,
              child: Image.asset(
                'assets/profile.jpg',
                fit: BoxFit.cover,
                width: double.infinity,
              ),
            ),
            Expanded(
              flex: 3,
              child: Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 12,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Title Uwu',
                      style: Theme.of(context).textTheme.headline6,
                    ),
                    Flexible(
                      child: Text(
                        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec arcu, vel sem nec,asdnalsbfsakjakjbaksjfkasfkasjfbkasjbfkasjbfkasjfvaksfvashfvjafvaksjfkasb',
                        style: Theme.of(context).textTheme.caption,
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                      ),
                    ),
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
