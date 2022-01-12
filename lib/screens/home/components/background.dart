import 'package:flutter/material.dart';

class MyBackground extends StatelessWidget {
  const MyBackground({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: double.infinity,
      child: Stack(
        fit: StackFit.expand,
        children: [
          Image.asset(
            'assets/background.jpg',
            fit: BoxFit.cover,
          ),
          const SizedBox(child: ColoredBox(color: Colors.black54)),
        ],
      ),
    );
  }
}
