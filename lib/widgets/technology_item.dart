import 'package:flutter/material.dart';
import 'package:simple_shadow/simple_shadow.dart';

class MyTechnologyItem extends StatelessWidget {
  const MyTechnologyItem({
    Key? key,
    required this.title,
    required this.image,
  }) : super(key: key);

  final String title;
  final ImageProvider image;

  @override
  Widget build(BuildContext context) {
    return SimpleShadow(
      sigma: 5,
      opacity: 1,
      child: Column(
        children: [
          Image(
            image: image,
            width: 140,
            height: 40,
            fit: BoxFit.contain,
          ),
          SizedBox(
            width: 140,
            child: Text(
              title,
              style: Theme.of(context).textTheme.titleLarge,
              textAlign: TextAlign.center,
            ),
          )
        ],
      ),
    );
  }
}
