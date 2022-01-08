import 'package:flutter/material.dart';

import 'profile.dart';

class MyBanner extends StatelessWidget {
  const MyBanner({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: 300,
      child: Stack(
        fit: StackFit.expand,
        children: [
          Image.asset(
            'assets/banner.jpeg',
            fit: BoxFit.cover,
          ),
          const SizedBox(child: ColoredBox(color: Colors.black54)),
          const MyProfile()
        ],
      ),
    );
  }
}
