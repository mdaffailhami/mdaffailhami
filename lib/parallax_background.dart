import 'package:flutter/material.dart';

class MyParallaxBackground extends StatelessWidget {
  const MyParallaxBackground({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Image.network(
          'https://i.pinimg.com/564x/0d/2b/c3/0d2bc3cb208740908a621a57d029514e.jpg',
          fit: BoxFit.cover,
          width: double.infinity,
          height: double.infinity,
        ),
        const SizedBox(
          width: double.infinity,
          height: double.infinity,
          child: const ColoredBox(color: Colors.black45),
        )
      ],
    );
  }
}
