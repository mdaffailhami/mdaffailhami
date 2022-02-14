import 'package:flutter/material.dart';

class MyProjectCard extends StatelessWidget {
  const MyProjectCard({
    Key? key,
    required this.image,
    required this.title,
    required this.caption,
  }) : super(key: key);

  final ImageProvider<Object> image;
  final String title;
  final String caption;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 280,
      height: 300,
      child: Card(
        elevation: 3,
        shadowColor: Colors.white,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        clipBehavior: Clip.antiAlias,
        color: Theme.of(context).colorScheme.surface,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Expanded(
              flex: 13,
              child: ColoredBox(
                color: Theme.of(context).colorScheme.background,
                child: Image(
                  image: image,
                  width: double.infinity,
                  fit: BoxFit.contain,
                ),
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
                      title,
                      style: Theme.of(context).textTheme.headline5,
                    ),
                    SizedBox(height: 4),
                    Flexible(
                      child: Text(
                        caption,
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
