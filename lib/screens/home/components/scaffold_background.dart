import 'package:flutter/material.dart';

class MyScaffoldBackground extends StatelessWidget {
  const MyScaffoldBackground({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
          height: double.infinity,
      child: Stack(
        fit: StackFit.expand,
        children: [
          Image.network(
            'https://i.pinimg.com/564x/0d/2b/c3/0d2bc3cb208740908a621a57d029514e.jpg',
            fit: BoxFit.cover,
          ),
          const SizedBox(child: ColoredBox(color: Colors.black45)),
        ],
      ),
    );
  }
}
