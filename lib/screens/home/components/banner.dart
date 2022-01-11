import 'package:flutter/material.dart';

import 'profile.dart';

class MyBanner extends StatelessWidget {
  const MyBanner({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        Image.asset('assets/banner.jpeg', fit: BoxFit.cover),
        SizedBox(child: ColoredBox(color: Colors.black54)),
        Padding(
          padding: EdgeInsets.only(top: 26),
          child: MyProfile(),
        ),
      ],
    );
  }
}
