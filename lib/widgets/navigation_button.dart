import 'package:flutter/material.dart';

class MyNavigationButton extends StatelessWidget {
  const MyNavigationButton({
    Key? key,
    required this.child,
    required this.componentKey,
  }) : super(key: key);

  final Widget child;
  final GlobalKey componentKey;

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: () {
        Scrollable.ensureVisible(
          componentKey.currentContext ?? context,
          duration: const Duration(milliseconds: 800),
          // alignment: 0.4,
        );

        if (Scaffold.of(context).isDrawerOpen) {
          Navigator.of(context).pop();
        }
      },
      style: TextButton.styleFrom(primary: Colors.white),
      child: Padding(
        padding: const EdgeInsets.all(10),
        child: child,
      ),
    );
  }
}
