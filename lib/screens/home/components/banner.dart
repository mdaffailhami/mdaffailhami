import 'package:flutter/material.dart';

import 'profile.dart';

class MyBanner extends StatelessWidget {
  const MyBanner({Key? key}) : super(key: key);

  static final GlobalKey componentKey = GlobalKey();

  @override
  Key? get key => componentKey;

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        Image.asset('assets/banner.jpeg', fit: BoxFit.cover),
        const SizedBox(child: ColoredBox(color: Colors.black54)),
        const Padding(
          padding: EdgeInsets.only(top: 26),
          child: MyProfile(),
        ),
      ],
    );
  }
}
