import 'package:flutter/material.dart';

class MyProjectCard extends StatelessWidget {
  const MyProjectCard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 220,
      height: 300,
      child: Card(
        elevation: 2,
        shadowColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        clipBehavior: Clip.antiAlias,
        color: Theme.of(context).colorScheme.surface,
        child: Column(
          children: [
            Expanded(
              flex: 13,
              child: Image.asset(
                'assets/profile.jpg',
                width: double.infinity,
                fit: BoxFit.cover,
              ),
            ),
            Expanded(
              flex: 7,
              child: Padding(
                padding: EdgeInsets.all(10),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Title lurr',
                      style: Theme.of(context).textTheme.headline5,
                    ),
                    Flexible(
                      child: Text(
                        'Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec arcu, vel sem nec,asdnalsbfsakjakjbaksjfkasfkasjfbkasjbfkasjbfkasjfvaksfvashfvjafvaksjfkasb',
                        overflow: TextOverflow.ellipsis,
                        maxLines: 3,
                        style: Theme.of(context).textTheme.caption,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
